export namespace Product {
  export type Model = {
    id: string
    name: string
    description: string
    roasted: string
    imagelink_square: string
    imagelink_portrait: string
    ingredients: string
    special_ingredient: string
    prices: Price[]
    average_rating: number
    ratings_count: string
    favourite: boolean
    type: string
    index: number
  }

  export type Price = {
    size: string
    price: string
    currency: string
  }
}