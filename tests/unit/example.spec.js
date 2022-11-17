// import { shallowMount } from '@vue/test-utils'
import Navigation from "../../src/components/Navigation.vue"

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })


test("map calls its argument with a non-null argument", () => {
  const mock = Navigation.signOut();
  [1].map(x => mock(x));
  expect(mock).toHaveBeenCalled(expect.anything());
})


// import { shallowMount } from "@vue/test-utils";
// import RandomNumber from "@/components/RandomNumber.vue";
// import sum from "../../src/components/sum"

// describe("RandomNumber", () => {
//   test("BY default the random number should be 0", () => {
//     const wrapper = shallowMount(RandomNumber);
//     expect(wrapper.html()).toContain("0");
//   });

//   test("IF BUTTON CLICKED the random number should be 1-10", async () => {
//     const wrapper = shallowMount(RandomNumber);
//     await wrapper.find("button").trigger("click");
//     const random_number = parseInt(wrapper.find("h2").text());
//     expect(random_number).toBeGreaterThanOrEqual(1);
//     expect(random_number).toBeLessThanOrEqual(10);
//   });

//   test("IF BUTTON CLICKED the random number should be 50-100", async () => {
//     const wrapper = shallowMount(RandomNumber, {
//       props: {
//         min: 50,
//         max: 100,
//       },
//     });
//     await wrapper.find("button").trigger("click");
//     const random_number = parseInt(wrapper.find("h2").text());
//     expect(random_number).toBeGreaterThanOrEqual(50);
//     expect(random_number).toBeLessThanOrEqual(100);
//   });

//   test("adds 1 + 2 to equal 3", () => {
//     expect(sum(1, 2)).toBe(3);
//   });
// });
