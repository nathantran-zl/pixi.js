/**
 * Holds information about how a filter pass will execute.
 *
 * @namespace PIXI
 */
export class FilterPass
{
    constructor()
    {
        /**
         * Texture bounds that will given to the filter.
         * @member {PIXI.Rectangle}
         */
        this.inputRect = null;

        /**
         * Texture bounds that will be rendered into by the filter.
         * @member {PIXI.Rectangle}
         */
        this.outputRect = null;

        /**
         * Filter may flag the operation as overload, i.e. which will take
         * too long to render in time.
         * @member {boolean}
         */
        this.isRenderable = null;
    }

    /**
     * Set the output-rect and return this.
     *
     * @returns {PIXI.FilterPass} this
     */
    withDefinedOutput(outputRect)
    {
        this.outputRect = outputRect;

        return this;
    }

    /**
     * Reset this object.
     */
    reset()
    {
        this.inputRect = null;
        this.outputRect = null;
        this.isRenderable = null;
    }
}
