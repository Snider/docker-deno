import {
  assert,
  assertEquals,
} from "https://deno.land/std@0.150.0/testing/asserts.ts";

import Docker from "../mod.ts";
import { retry } from "./helpers.ts";
import {
  forEach
} from "https://cdn.skypack.dev/-/lodash@v4.17.21-K6GEbP02mWFnLA45zAmi/dist=es2019,mode=imports/optimized/lodash.js";

const docker = new Docker("/var/run/docker.sock");

Deno.test("Image: list - default", async () => {
  const images = await docker.images.list();
   assert(images.length >= 1);
});
Deno.test("Image: list - all:true", async () => {
  const images = await docker.images.list({all: true});
   assert(images.length >= 1);
});
Deno.test("Image: Pull Image", async () => {
  const images = await docker.images.create('lthn/chain', {"fromImage": "lthn/chain", tag: 'latest'});

  assert(images.length >= 1);
});


