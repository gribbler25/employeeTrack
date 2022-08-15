INSERT INTO department (names)
VALUES
('Nuts'),
('Bolts'),
('Paint'),
('Lighting'),
('Housewares'),
('Advertising');

INSERT INTO role (title, salary, department_id)
VALUES
('electrician', 80.00, 3), 
('painter', 30.00, 2),
('salesRep', 50.00, 4),
('salesRep', 50.00, 6),
('carpenter', 50.00, 1),
('marketer', 90.00, 5);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES('Van', 'Stephenson', 6, null),
('Ren', 'Nguyen', 4, null),
('Sarah', 'Gribble', 6, 1),
('Tam', 'Nguyen', 6, 1),
('Karin', 'Bernal', 3, 2),
('David', 'Hasselhoff', 4, 2),
('Maryn', 'Nguyen', 2, 1),
('Pattie', 'Roche', 1, null),
('Katty', 'Gletty', 5, 8);
