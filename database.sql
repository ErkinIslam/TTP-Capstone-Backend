CREATE DATABASE sandwich_maker;

CREATE TABLE "user_profile" (
  "user_id" serial(pk),
  "username" varchar(255),
  "user_email" varchar(255),
  "password" varchar(255)
);

CREATE TABLE "user_sandwich" (
  "sandwich_id" serial(pk),
  "sandwich_name" varchar(255),
  "user_id" (fk referencing user_id),
  CONSTRAINT "FK_user_sandwich.user_id"
    FOREIGN KEY ("user_id")
      REFERENCES "user_profile"("user_id")
);

CREATE TABLE "sandwich_ingredients" (
  "item_id" serial(pk),
  "used_in" (fk references sandwich_id,
  "ingredient_id" (fk referencing ing_id),
  CONSTRAINT "FK_sandwich_ingredients.item_id"
    FOREIGN KEY ("item_id")
      REFERENCES "user_sandwich"("sandwich_id")
);

CREATE TABLE "ingedients" (
  "ing_id" serial(pk),
  "ing_type" varchar(255),
  "ing_name" varchar(255),
  "image_path" varchar(255),
  CONSTRAINT "FK_ingedients.ing_id"
    FOREIGN KEY ("ing_id")
      REFERENCES "sandwich_ingredients"("ingredient_id")
);

