import React from 'react'
import Board from '../Board/Board'
import Square from '../Square/Square'
import renderer from 'react-test-renderer'
import toJson from 'enzyme-to-json'
import Enzyme, { shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import App from '../App'

Enzyme.configure({ adapter: new Adapter() });

let testIds = [
    [1,2,3],
    [4,5,6],
    [8,9,10]
]

const multiDimTicTacScoreBoard = [...Array(3).keys()]
.map((level,levelIdx) => [...Array(3).keys()]
.map((subLevel, subLevelIdx) => ({ _id : testIds[levelIdx][subLevelIdx],  
                    val : null, 
                    coor:null, 
                    isWinningSquare:false}) ))


describe('Board', () => {
    let wrapper 
    beforeAll(() => {
        wrapper = shallow( <Board
            click={() => {}}
            winningSquares={() => {}}
            xIsNext={true}
            toggle={() => {}} 
            squares={multiDimTicTacScoreBoard} /> )
    })
    it(' has board div? ', () => {
        expect(wrapper.find('#board').length).toBe(1)
    })

    it(' has h3 tag ', () => {
        expect(wrapper.find('#board #moveHeader').length).toBe(1)
    })

    it(' h3 tag has Next Player: X text ', () => {
        console.log(wrapper.find('#board #moveHeader'))
        expect(wrapper.find('#board #moveHeader').text()).toBeTruthy()
    })

    it(' how <Squares /> are there? ', () => {
        expect(wrapper.find(Square).length).toBe(9)
    })

    it(' get the h3 Next Player : x text', () => {
        expect(wrapper.find('#moveHeader').length).toBe(1)
        expect(wrapper.find('#moveHeader').text()).toBe('Next Player:  X ')
    })
    

})






// snapshot testing suite 

describe(' Board matching snapshot test ', () => {
    it('testing board snpashot', () => {
        const tree = renderer.create(<Board 
        click={() => {}}
        winningSquares={() => {}}
        xIsNext={true}
        toggle={() => {}} 
        squares={multiDimTicTacScoreBoard} />).toJSON()

        expect(tree).toMatchSnapshot()
    })
})