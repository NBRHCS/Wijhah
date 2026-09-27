# Project Agent Instructions

## Permanent Progress and Checkpoint System

- في أي مهمة تطوير تستغرق أكثر من خطوة، استخدم `CODEX_PROGRESS.md` كسجل تقدم دائم.
- `CODEX_PROGRESS.md` ملف محلي مستبعد من Git؛ أنشئه عند غيابه ولا تضف إليه أسرارًا أو بيانات شخصية ولا تلتزم به في المستودع.
- حدّث `CODEX_PROGRESS.md` بعد كل مرحلة مهمة من العمل، وليس فقط عند انتهاء المهمة.
- قبل الانتقال من مرحلة إلى أخرى، حدّث أقسام `Completed` و`In Progress` و`Next Steps`.
- إذا تم تعديل ملفات، حدّث قسم `Files Changed`.
- إذا تم تشغيل lint أو tests أو build، سجّل الأوامر والنتائج في قسم `Commands / Tests Run`.
- لا تعتبر `CODEX_PROGRESS.md` مصدر الحقيقة الوحيد؛ تحقق دائمًا من الملفات الفعلية و`git status` و`git diff`.
- عند بدء جلسة جديدة أو استكمال جلسة متوقفة:
  1. اقرأ `AGENTS.md`.
  2. اقرأ `CODEX_PROGRESS.md`.
  3. شغّل `git status`.
  4. راجع `git diff`.
  5. راجع آخر تغييرات المشروع ذات الصلة.
  6. تحقق فعليًا مما تم تنفيذه.
  7. أكمل من `In Progress` و`Next Steps` بدل إعادة المهمة من البداية.
- لا تعِد تنفيذ شيء موجود بالفعل إلا بعد التحقق من أنه ناقص أو خاطئ.
- عند اكتمال المهمة بالكامل، غيّر `Current Task` إلى `Completed` واكتب النتيجة النهائية في `Last Checkpoint`.
