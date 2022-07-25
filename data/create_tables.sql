-- Table: public.ingredient

-- DROP TABLE IF EXISTS public.ingredient;

CREATE TABLE IF NOT EXISTS public.ingredient
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT ingredient_pk PRIMARY KEY (id)
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.ingredient
    OWNER to spedata;

-- Table: public.recette

-- DROP TABLE IF EXISTS public.recette;

CREATE TABLE IF NOT EXISTS public.recette
(
    id integer NOT NULL,
    name text COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT recette_pkey PRIMARY KEY (id)
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.recette
    OWNER to spedata;

-- Table: public.ingredient_recette

-- DROP TABLE IF EXISTS public.ingredient_recette;

CREATE TABLE IF NOT EXISTS public.ingredient_recette
(
    id integer NOT NULL,
    ingredient_id integer NOT NULL,
    recette_id integer NOT NULL,
    quantite integer NOT NULL,
    unite text COLLATE pg_catalog."default",
    CONSTRAINT ingredient_recette_pkey PRIMARY KEY (id),
    CONSTRAINT ingredient_fk FOREIGN KEY (ingredient_id)
    REFERENCES public.ingredient (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID,
    CONSTRAINT recette_fk FOREIGN KEY (recette_id)
    REFERENCES public.recette (id) MATCH SIMPLE
    ON UPDATE NO ACTION
    ON DELETE NO ACTION
    NOT VALID
    )

    TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.ingredient_recette
    OWNER to spedata;
-- Index: fki_ingredient_fk

-- DROP INDEX IF EXISTS public.fki_ingredient_fk;

CREATE INDEX IF NOT EXISTS fki_ingredient_fk
    ON public.ingredient_recette USING btree
    (ingredient_id ASC NULLS LAST)
    TABLESPACE pg_default;
-- Index: fki_recette_fk

-- DROP INDEX IF EXISTS public.fki_recette_fk;

CREATE INDEX IF NOT EXISTS fki_recette_fk
    ON public.ingredient_recette USING btree
    (recette_id ASC NULLS LAST)
    TABLESPACE pg_default;
