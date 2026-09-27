import {type Bi} from './data';
export const stageGuides:Record<string,{task:Bi;url:string}>={
'Excel':{task:['نظّف جدولًا، واستخدم دوال التجميع، ثم أنشئ Pivot Table يجيب عن سؤال واضح.','Clean a table, use aggregation formulas, and build a pivot table that answers a clear question.'],url:'https://support.microsoft.com/en-us/excel'},
'SQL':{task:['اكتب استعلامات فلترة وتجميع وربط لجداول عملاء وطلبات، وتحقق من صحة النتائج.','Write filtering, grouping, and join queries for customers and orders; verify the results.'],url:'https://www.postgresql.org/docs/current/tutorial.html'},
'Statistics':{task:['قارن المتوسط والوسيط والتشتت، واشرح أثر القيم الشاذة على استنتاجك.','Compare mean, median, and spread; explain how outliers affect your conclusions.'],url:'https://www.khanacademy.org/math/statistics-probability'},
'Power BI':{task:['ابنِ نموذج بيانات ولوحة بمؤشرات وفلاتر، واختبر صحة المقاييس.','Build a data model and a dashboard with metrics and filters; validate the measures.'],url:'https://learn.microsoft.com/en-us/training/powerplatform/power-bi'},
'Python':{task:['اكتب برنامجًا يقرأ ملف بيانات وينظفه ويصدر ملخصًا، مع معالجة أخطاء الإدخال.','Write a script that reads, cleans, and summarizes a dataset with input error handling.'],url:'https://docs.python.org/3/tutorial/'},
'Portfolio':{task:['وثّق مشروعًا كاملًا: المشكلة، خطواتك، النتيجة، القيود، وما ستطوره لاحقًا.','Document a complete project: problem, approach, outcome, limitations, and next improvements.'],url:'https://docs.github.com/en/pages'},
'JavaScript':{task:['ابنِ قائمة مهام تتفاعل مع الإدخال وتتحقق من القيم وتحفظ مسودة محلية.','Build a task list with input validation, interactions, and a local draft.'],url:'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide'},
'HTML & CSS':{task:['صمم صفحة دلالية متجاوبة واختبر لوحة المفاتيح على شاشة صغيرة.','Create a semantic responsive page and test keyboard use at a small screen size.'],url:'https://developer.mozilla.org/en-US/docs/Learn_web_development'},
'React':{task:['قسّم تطبيقًا إلى مكونات، وأدر حالة نموذج مع تحميل وأخطاء واضحة.','Split an app into components and manage a form with loading and error states.'],url:'https://react.dev/learn'},
'KPIs':{task:['عرّف ثلاثة مؤشرات مع البسط والمقام والفترة ومصدر البيانات، واختبرها يدويًا.','Define three metrics with numerator, denominator, time window, and source; verify them manually.'],url:'https://learn.microsoft.com/en-us/power-bi/create-reports/service-dashboards'},
'Storytelling':{task:['حوّل تحليلك إلى عرض من ثلاث شرائح: السؤال والدليل والتوصية، مع ذكر القيود.','Turn an analysis into three slides: question, evidence, recommendation, with limitations.'],url:'https://www.data-to-viz.com/'},
};
