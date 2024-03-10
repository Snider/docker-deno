export interface ImageCreate {
    /**
     * Name of the image to pull.
     * The name may include a tag or digest. This parameter may only be used when pulling an image.
     * The pull is cancelled if the HTTP connection is closed.
     */
    fromImage: string;

    /**
     * Source to import.
     * The value may be a URL from which the image can be retrieved or - to read the image from the request body.
     * This parameter may only be used when importing an image.
     */
    fromSrc?: string;

    /**
     * Repository name given to an image when it is imported. The repo may include a tag.
     * This parameter may only be used when importing an image.
     */
    repo?: string;

    /**
     * Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     */
    tag?: string;

    /**
     * Set commit message for imported image.
     */
    message?: string;

    /**
     * Apply Dockerfile instructions to the image that is created, for example: changes=ENV DEBUG=true.
     * Note that ENV DEBUG=true should be URI component encoded.
     *
     * Supported Dockerfile instructions: CMD|ENTRYPOINT|ENV|EXPOSE|ONBUILD|USER|VOLUME|WORKDIR
     */
    changes?: string[];

    /**
     * Platform in the format os[/arch[/variant]]
     */
    platform?: string;
}