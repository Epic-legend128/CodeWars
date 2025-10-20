WITH special_sales AS (SELECT department_id FROM sales WHERE price > 90)
SELECT departments.id, departments.name FROM departments WHERE departments.id IN(SELECT department_id FROM special_sales);