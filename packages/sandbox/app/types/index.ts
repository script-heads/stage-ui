export type ResponsePassenger = {
  data: PassengersData[]
  totalPages: number
  totalPassengers: number
}

export type PassengersData = {  
  name: string
  trips: number
  __v: number
  _id: string  
}