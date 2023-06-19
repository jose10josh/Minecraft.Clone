import { TextureLoader, RepeatWrapping, NearestFilter } from "three";
import { grassImg, dirtImg, woodImg, glassImg, logImg } from "./images";

const groundTexture = new TextureLoader().load(grassImg);
const dirtTexture = new TextureLoader().load(dirtImg);
const woodTexture = new TextureLoader().load(woodImg);
const glassTexture = new TextureLoader().load(glassImg);
const logTexture = new TextureLoader().load(logImg);

groundTexture.wrapS = RepeatWrapping;
groundTexture.wrapT = RepeatWrapping;
groundTexture.magFilter = NearestFilter;

dirtTexture.wrapS = RepeatWrapping;
dirtTexture.wrapT = RepeatWrapping;
dirtTexture.magFilter = NearestFilter;

woodTexture.wrapS = RepeatWrapping;
woodTexture.wrapT = RepeatWrapping;
woodTexture.magFilter = NearestFilter;

glassTexture.wrapS = RepeatWrapping;
glassTexture.wrapT = RepeatWrapping;
glassTexture.magFilter = NearestFilter;

logTexture.wrapS = RepeatWrapping;
logTexture.wrapT = RepeatWrapping;
logTexture.magFilter = NearestFilter;

export { groundTexture, dirtTexture, woodTexture, glassTexture, logTexture };
