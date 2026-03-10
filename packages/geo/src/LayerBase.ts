import type MapBox from 'mapbox-gl'

/** Abstract base class for managing MapBox map layers with add/remove lifecycle. */
export abstract class LayerBase<T extends MapBox.Layer> {
  id: string
  source: string

  constructor(id: string, source: string) {
    this.id = id
    this.source = source
  }

  /**
   * Removes and re-adds the layer on the map, optionally hiding it.
   * @param map - The MapBox map instance
   * @param show - Whether to show the layer after updating (default true)
   */
  update(map: MapBox.Map, show = true) {
    if (map.getLayer(this.id)) {
      map.removeLayer(this.id)
    }
    if (show) {
      map.addLayer(this.buildLayer())
    }
  }

  /** Builds the MapBox layer configuration object. */
  abstract buildLayer(): T
}
