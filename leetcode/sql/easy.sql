-- 182. Duplicate Emails
-- # Write your MySQL query statement below
SELECT email as Email
FROM Person
GROUP BY email
HAVING COUNT(*) > 1

-- 1407. Top Travellers
# Write your MySQL query statement below
SELECT 
Users.name,
IFNULL(SUM(Rides.distance), 0) as travelled_distance
FROM Users
LEFT JOIN Rides ON Users.id = Rides.user_id
GROUP BY Users.id, Users.name
ORDER BY travelled_distance DESC, Users.name ASC

-- 1378. Replace Employee ID With The Unique Identifier
-- # Write your MySQL query statement below
SELECT unique_id, name
FROM Employees
LEFT JOIN EmployeeUNI ON Employees.id = EmployeeUNI.id

-- 183. Customers Who Never Order
# Write your MySQL query statement below
SELECT c.name as Customers
FROM Customers c
LEFT JOIN Orders o ON c.id = o.customerId
WHERE o.id IS NULL