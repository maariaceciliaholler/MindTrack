INSERT INTO tb_user (user_email, user_name, user_password) 
VALUES 
    ('usuario1@email.com', 'Usuário 1', 'senha123'),
    ('usuario2@email.com', 'Usuário 2', 'senha456'),
    ('usuario3@email.com', 'Usuário 3', 'senha789');
    
INSERT INTO tb_label (label_name, fk_user_id) 
VALUES 
    ('Trabalho', 1), 
    ('Pessoal', 2),   
    ('Importante', 1);
    
INSERT INTO tb_note (creation_date, note_content, note_title, user_user_id) 
VALUES 
    (CURRENT_DATE, 'Conteúdo da nota 1', 'Título da Nota 1', 1),
    (CURRENT_DATE, 'Conteúdo da nota 2', 'Título da Nota 2', 2), 
    (CURRENT_DATE, 'Conteúdo da nota 3', 'Título da Nota 3', 1); 

INSERT INTO tb_reminder (reminder_content, reminder_date, user_user_id) 
VALUES 
    ('Lembrete 1', CURRENT_DATE, 1),
    ('Lembrete 2', CURRENT_DATE, 2),
    ('Lembrete 3', CURRENT_DATE, 1); 

INSERT INTO tb_track_list_item (list_date, list_items, list_title, user_user_id) 
VALUES 
    (CURRENT_DATE, '{"Item 1", "Item 2", "Item 3"}', 'Lista 1', 1), 
    (CURRENT_DATE, '{"Item A", "Item B", "Item C"}', 'Lista 2', 2), 
    (CURRENT_DATE, '{"Item X", "Item Y", "Item Z"}', 'Lista 3', 1);