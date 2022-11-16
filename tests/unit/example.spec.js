import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})


// test('the best flavor is grapefruit', () => {
//   expect(bestLaCroixFlavor()).toBe('grapefruit');
// })

// test('map calls its argument with a non-null argument', () => {
//   const mock = jest.fn();
//   [1].map(x => mock(x));
//   expect(mock).toHaveBeenCalledWith(expect.anything());
// });
