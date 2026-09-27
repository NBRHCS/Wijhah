# إعداد مستودع وجهة على GitHub

هذا الملف قائمة عملية لمالك المشروع بعد مراجعة الملفات محليًا. لا تتطلب خطوات تجهيز الكود إنشاء مستودع أو تنفيذ `git push`.

## بيانات المستودع المقترحة

- **Repository name:** `Wijhah`
- **Description:** `Arabic-first bilingual platform for exploring educational and career paths through an adaptive assessment and practical roadmaps.`
- **GitHub About:** استخدم الوصف نفسه لأنه موجز ويشرح الجمهور والوظيفة الأساسية.
- **Website:** اتركه فارغًا عند الإنشاء، ثم أضف رابطًا عامًا ثابتًا لا يكشف اسم مستخدم شخصيًا عندما يتوفر.
- **Visibility:** Public
- **License shown by GitHub:** MIT

### Topics

```text
arabic
career-guidance
career-path
career-planning
career-exploration
career-discovery
education
students
university
higher-education
rtl
typescript
react
nextjs
vite
tailwindcss
cloudflare-workers
d1
open-source
```

## قبل أول نشر

1. راجع `git status` و`git diff --stat` و`git diff --cached`.
2. تأكد أن `.env*` الفعلية و`.openai/hosting.json` و`CODEX_PROGRESS.md` وملفات `*.tsbuildinfo` غير متتبعة.
3. شغّل فحص الأسرار على اللقطة النهائية وعلى التاريخ الذي ستنشره.
4. تأكد أن روابط الاستنساخ في README وCONTRIBUTING تستخدم `https://github.com/NBRHCS/Wijhah`.
5. أضف لقطات شاشة خالية من بيانات المستخدمين وحدّث قسم Screenshots.
6. عيّن صاحب حقوق النشر الصحيح في `LICENSE` إذا لم يكن الاسم القانوني `Wijhah`.
7. أضف `CODE_OF_CONDUCT.md` فقط بعد توفير قناة خاصة فعلية لتلقي البلاغات.

### تنبيه حول التاريخ المحلي

اللقطة الحالية تستبعد سجلات تقدم وإعدادات استضافة محلية، لكن الإصدارات الأقدم في تاريخ Git قد تظل قابلة للعرض إذا نُشر التاريخ كاملًا. لا تحتوي نتائج الفحص الحالية على أسرار معروفة، إلا أن المستودع العام الأنظف يبدأ من اللقطة المنقحة بسجل جديد. إذا كان الاحتفاظ بالتاريخ ضروريًا، راجعه ونظفه بأداة موثوقة قبل النشر واحفظ نسخة احتياطية أولًا.

## Settings → General

- فعّل **Issues** و**Discussions**.
- اترك **Projects** معطلًا ما لم تكن ستستخدمه فعلًا لإدارة العمل.
- عطّل **Wiki** ما دام التوثيق موجودًا داخل `docs/`.
- اسمح بـ**Squash merging**، ويمكن إبقاء **Rebase merging** حسب أسلوب الفريق.
- فعّل **Automatically delete head branches** بعد الدمج.
- أضف صورة Social preview بعد تجهيز لقطات المشروع.

## Settings → Branches / Rules

أنشئ ruleset للفرع الافتراضي `main` يتضمن:

- منع الحذف وforce push.
- طلب Pull Request قبل الدمج.
- لا تشترط موافقة في البداية إذا كان للمشروع مشرف واحد فقط؛ ارفع الحد إلى موافقة واحدة عند وجود مشرف ثانٍ فعلي.
- حل جميع محادثات المراجعة قبل الدمج.
- نجاح فحص **Quality checks** من workflow باسم **CI**.
- لا تضف متطلبات توقيع commits أو تقييد أسماء الفروع أو قواعد مؤسسية إضافية في الإصدار الأول.

أنشئ القاعدة بعد أول تشغيل ناجح لـCI حتى يظهر اسم الفحص في قائمة GitHub.

## Settings → Security

- فعّل **Private vulnerability reporting** ليتوافق مسار البلاغ مع `SECURITY.md`.
- فعّل Dependency graph وDependabot alerts وDependabot security updates.
- فعّل Secret scanning وPush protection إذا كانا متاحين للمستودع.
- راجع Dependabot Pull Requests أسبوعيًا، ولا تدمج تحديثًا قبل نجاح CI ومراجعة التغييرات الكبيرة.

## مراجعة المجتمع

- تأكد أن GitHub يتعرف على `LICENSE` و`CONTRIBUTING.md` و`SECURITY.md`.
- جرّب إنشاء Bug report وFeature request للتأكد من ظهور الحقول والوسوم.
- افتح Pull Request تجريبيًا وتحقق من القالب ومن تشغيل CI.
- عيّن مشرفين واضحين وراجع قنوات الإبلاغ الخاصة قبل الإعلان العام.
