import { shallowMount } from '@vue/test-utils'
import Navigation from "../../src/components/Navigation.vue"
import Videos from "../../src/views/Videos.vue"
import NewsPage from "../../src/views/NewsPage.vue"
import ViewPost from "../../src/components/ViewPost.vue"
import StockScreener from "../../src/views/StockScreener.vue"

describe("Flourish", () => {

  test("When clicking a button, the videos will be fetched and displayed", async () => {
    const mockMethod = jest.spyOn(Videos.methods, "onSearchTermChange")
    await shallowMount(Videos).find("button").trigger("click");
    expect(mockMethod).toHaveBeenCalled() 
  })

  test("When clicking a button, the news articles will be fetched and displayed", async () => {
    const mockMethod = jest.spyOn(NewsPage.methods, "fetchTopNews")
    await shallowMount(NewsPage).find("button").trigger("click")
    expect(mockMethod).toHaveBeenCalled()
  })

  test("When viewing a post, the post should have a Title, Image, and text HTML Elements", async () => {
    const wrapper = shallowMount(ViewPost)
    const title = wrapper.find("h2")
    const image = wrapper.find("img")
    expect(title).toBe(true)
    expect(image).toBe(true); 
  })

  test("When Stock screener page is rendered, API will be fetched and data shown", async () => {
    const mockMethod = jest.spyOn(StockScreener.methods, "recommendationConvert");
    await shallowMount(StockScreener)
    expect(mockMethod).toHaveBeenCalled() 
  })

  test("Upon submitting, search bar will redirect", async () => {
    const wrapper5 = shallowMount(Navigation);
    await wrapper5.find("button").trigger("click");
    expect(window.location.href).toBe("/{stock}") 
  })
})

