import { RegistryAuth } from "./lib/client/auth.ts";
import { Container } from "./container.ts";
import { DockerClient } from "./lib/client/client.ts";
import { ContainerCreate } from "./lib/types/container/create.ts";
import {Image} from "./image.ts";

export default class Docker {
  containers: Container;
  images: Image;

  constructor(options: string|Deno.ConnectOptions, auth: RegistryAuth | null = null) {
    const client = new DockerClient(options, auth);
    this.containers = new Container(client);
    this.images = new Image(client);
  }
}

export type {ContainerCreate, Docker};
