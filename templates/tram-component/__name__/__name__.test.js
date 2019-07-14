import {{ name }} from './{{ name }}'

describe('{{ name }}', () => {
  describe('with default props', () => {
    const wrapper = {{ name }}()

    it('should match snapshot', () => {
      expect(wrapper.outerHTML).toMatchSnapshot()
    })
  })
})
