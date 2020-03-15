interface IEvent {
  a: number
  b: number
}

export async  function sum(event: IEvent): Promise<number> {
  return await Promise.resolve(event.a + event.b)
}
