import { image_search } from "duckduckgo-images-api"
import farming_items from "../data/marketplace";

const fetch_image = async (query: string) => {
  try {
    const data = await image_search({
      query: query,
      moderate: true,
      iterations: 2,
    });
    return data[0];
  } catch (error) {
    return {
      image:
        "https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png",
      thumbnail:
        "https://arthurmillerfoundation.org/wp-content/uploads/2018/06/default-placeholder.png",
    };
  }
};

const fetch_marketplace = async (n: number) => {
    const items = farming_items.slice(0, n).map(async (item) => {
        const data = await fetch_image(item.name);
        return {
            type: item.type,
            name: item.name,
            price_inr: item.price_inr,
            image: data.image,
            thumbnail: data.thumbnail,
        };
    });
    return items;
}

export default fetch_marketplace
