import { DockerClient } from "./lib/client/client.ts";
import {ContainerCreate, ContainerCreateResponse} from "./lib/types/container/create.ts";
import {ImageList} from "./lib/types/images/image.ts";

export interface ImageListOptions {
  // Return all containers. By default, only running containers are shown
  all?: boolean;
  // Show digest information as a RepoDigests field on each image.
  digests?: boolean;
  // Filters to process on the container list, encoded as JSON (a map[string][]string). For example, {"status": ["paused"]} will only return paused containers.
  filters?: string;
}

export class Image {
  private client: DockerClient;

  constructor(client: DockerClient) {
    this.client = client;
  }


  async list(options?: ImageListOptions): Promise<ImageList[]> {
    const res = await this.client.get("/images/json", [
      {name: "all", value: options?.all ? "true" : ""},
      {name: "digests", value: options?.digests ? options.digests.toString() : ""},
      {name: "filters", value: options?.filters ?? ""},
    ]);
    if (!res.body || !res.body.length) {
      return [];
    }

    return JSON.parse(res.body);
  }

  async create(
    name: string,
    config: ContainerCreate,
  ): Promise<ContainerCreateResponse> {
    const res = await this.client.post(
      "/containers/create",
      JSON.stringify(config),
      [{ name: "name", value: name }],
    );
    if (!res.body || !res.body.length) {
      return {};
    }
    return JSON.parse(res.body);
  }



}
