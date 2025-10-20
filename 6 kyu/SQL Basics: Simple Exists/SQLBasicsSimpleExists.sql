SELECT id, name FROM departments WHERE EXISTS(
SELECT sales.id FROM sales WHERE price>98 AND departments.id=sales.department_id
);