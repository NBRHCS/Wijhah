const assert=require('node:assert/strict');
const fs=require('node:fs');
const e=require('../work/engine-v2.cjs');
const profiles=[
{name:'Health: biology, people, care; dislikes programming',domain:'health',traits:[5,2,5,4,5,3]},
{name:'Arts: drawing and creativity; dislikes mathematics',domain:'arts',traits:[5,3,4,4,5,4]},
{name:'Business: numbers, negotiation, commerce',domain:'business',traits:[5,5,3,4,5,4]},
{name:'Engineering: machines, fieldwork, physics',domain:'engineering',traits:[5,3,5,2,4,4]},
{name:'Law: reading, argument, writing, causes',domain:'law',traits:[5,5,5,5,4,4]},
{name:'Technology: programming and logic',domain:'technology',traits:[5,3,2,3,2,3]},
];
function broad(target){return Object.fromEntries(e.domains.map(d=>['broad:'+d.id,d.id===target?5:2]));}
const results=profiles.map(p=>{const a=broad(p.domain);p.traits.forEach((v,i)=>a['specific:'+p.domain+':'+i]=v);const secondary=p.domain==='technology'?'health':'technology';a['broad:'+secondary]=3;for(let i=0;i<6;i++)a['specific:'+secondary+':'+i]=1;const suggested=e.recommendedDomains(a);assert(suggested.includes(p.domain)&&suggested.includes(secondary));const ranked=e.rankedCareers(a,suggested);assert(ranked.length>0);assert.equal(ranked[0].domain,p.domain);assert(e.isComplete(a,suggested));return {persona:p.name,expected:p.domain,actual:ranked[0].domain,career:ranked[0].name[1],personalFit:e.score(ranked[0],a),pass:true};});
assert.equal(e.domains.length,21);assert.equal(e.broadQuestions.length,21);assert.equal(new Set(e.broadQuestions.map(q=>q.domain)).size,21);
for(const d of e.domains){assert.equal(e.broadQuestions.filter(q=>q.domain===d.id).length,1);assert.equal(e.specificQuestions([d.id]).length,6);const a=broad(d.id);for(let i=0;i<6;i++)a['specific:'+d.id+':'+i]=3;assert.equal(e.rankedCareers(a,[d.id])[0].domain,d.id)}
assert(e.careers.every(c=>c.profile.length===6&&c.profile.every(x=>x>=1&&x<=5)));
const unknown=Object.fromEntries(e.broadQuestions.map(q=>[q.id,0]));assert.equal(e.recommendedDomains(unknown).length,0);assert.equal(e.rankedCareers(unknown,e.domains.map(d=>d.id)).length,0);assert(e.domainScores(unknown).every(x=>x.score===null));
const ties=Object.fromEntries(e.broadQuestions.map(q=>[q.id,4]));assert.equal(e.recommendedDomains(ties).length,21,'Ties must not silently prioritize any domain');
assert(e.specificQuestions(['health']).every(q=>q.domain==='health'));assert(!e.specificQuestions(['technology'],{'specific:technology:0':1}).some(q=>q.trait===5));assert(e.specificQuestions(['technology'],{'specific:technology:0':0}).some(q=>q.trait===5));
const c=e.careers.find(c=>c.id==='medicine'),a=broad('health');a['specific:health:0']=5;a['specific:health:1']=5;a['specific:health:2']=5;
const before=e.fit(c,a).score;assert.equal(before,e.fit(c,{...a,'specific:health:3':0}).score,'Unknown answers must not lower personal fit');
assert.equal(before,e.fit({...c,marketOutlook:100,popularity:999,salary:9999999},a).score,'Market values must not enter fit');
const zeroBroad={...a,'broad:health':0};assert.equal(e.fit(c,zeroBroad).score,100,'Unknown broad answers reweight observed detail evidence');
assert(e.careers.some(c=>c.domain==='trades'));assert(e.careers.some(c=>c.domain==='aviation'));assert.equal(results.filter(r=>r.actual==='technology').length,1);
const report={engineVersion:e.ENGINE_VERSION,domainCount:e.domains.length,careerCount:e.careers.length,broadQuestionCount:e.broadQuestions.length,specificQuestionCount:e.domains.reduce((n,d)=>n+e.specificQuestions([d.id]).length,0),personas:results,invariants:['Equal broad exposure across 21 domains','All 21 domain paths tested','All-unknown produces no match','Ties preserve all domains','No technical questions in nontechnical branches','Low programming skips advanced AI question','Unknowns excluded without score penalty','Market/pay/popularity independent from fit','At least three observed detail answers required'],status:'PASS'};
fs.writeFileSync('outputs/assessment-bias-tests.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report,null,2));
