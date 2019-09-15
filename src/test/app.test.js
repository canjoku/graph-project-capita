import React from 'react'
import { shallow } from 'enzyme'
import App from '../components/App'

const setUp = (props={}) => {
  const component = shallow(<App {...props}/>)
  return component
}

const findByTestAttr = (component, attr) => {
  const wrapper = component.find(`[data-test='${attr}']`)
  return wrapper
}

describe('<App /> renders correctly', () => {

  let component
  beforeEach(() => {
    component = setUp()
  })

  it('should match a saved snapshot', () => {
    expect(component).toMatchSnapshot()
  })

  it('should contain a start section', () => {
    const startSection = findByTestAttr(component, 'start-section')
    expect(startSection.length).toBe(1)
  })

  it('should contain an end section', () => {
    const endSection = findByTestAttr(component, 'end-section')
    expect(endSection.length).toBe(1)
  })

  it('should contain a show path button ', () => {
    const pathSection = findByTestAttr(component, 'path-section')
    expect(pathSection.length).toBe(1)
  })

  it('should contain a show path section', () => {
    const pathSection = findByTestAttr(component, 'show-path-section')
    expect(pathSection.length).toBe(1)
  })

})

  
  
  
  
  

