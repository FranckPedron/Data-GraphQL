INSERT INTO public.recette(
    id, name)
VALUES
    (1, 'Blancs de poulet légers au yaourt et citron vert'),
    (2, 'Tarte au citron vert légère');


INSERT INTO public.ingredient(
    id, name)
VALUES
    (1, 'Escalopes de poulet'),
    (2, 'Citron vert'),
    (3, 'Yaourt nature'),
    (4, 'Farine'),
    (5, 'Sucre'),
    (6, 'Sucre vanillé'),
    (7, 'Beurre doux'),
    (8, 'Sucre vanillé'),
    (9, 'Oeuf'),
    (10, 'Crème de citron légère');

INSERT INTO public.ingredient_recette(
    id, ingredient_id, recette_id, quantite, unite)
VALUES
    (1, 1, 1, 6, ''),
    (2, 2, 1, 1, ''),
    (3, 3, 1, 2, ''),
    (4, 4, 2, 200, 'g'),
    (5, 5, 2, 325, 'g'),
    (6, 6, 2, 1, 'sachet'),
    (7, 7, 2, 100, 'g'),
    (8, 8, 2, 6, ''),
    (9, 10, 2, 100, 'g'),
    (10, 2, 2, 1, '');
