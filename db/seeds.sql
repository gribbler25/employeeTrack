INPUT INTO department (names)
VALUES
('Nuts'),
('Bolts'),
('Paint'),
('Lighting'),
('Housewares'),
('Advertising');

INPUT INTO roles (name, salary, department_id)
VALUES
('electrician', 80.00, 3), 
('painter', 30.00, 2),
('salesRep', 50.00, 4),
('salesRep', 50.00, 6),
('carpenter', 50.00, 1),
('marketer', 90.00, 5);

INPUT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
(Sarah, Gribble, 6, 3),
(Tam, Nguyen, 6, 3),
(Van, Stephenson, 6, null),
(Ren, Nguyen, 4, null),
(Karin, Bernal, 3, 4),
(David, Hasselhoff, 4, 4),
(Maryn, Nguyen, 2, 3),
(Pattie, Roche, 1, null),
(Katty, Gletty, 5, 8);
