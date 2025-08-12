'use client'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Home() {
  const sourceNumber = [
    [6, 1],
    [4, 3],
    [5, 1],
    [3, 4],
    [1, 1],
    [3, 4],
    [1, 2],
    [3, 3],
    [3, 22],
    [13, 3],
    [3, 9],
    [5, 12],
  ]

  const [doubleNumber, setDoubleNumber] = useState(0)
  const [arrayData, setArrayData] = useState<number[][]>([])
  const [character, setCharacter] = useState<Record<string, number>>({})

  const checkDoubleNumber = ({ sourceNumber }: { sourceNumber: number[][] }) => {
    let result = 0
    for (let i = 0; i < sourceNumber.length; i++) {
      if (sourceNumber[i][0] == sourceNumber[i][1]) {
        result++
      }
    }
    setDoubleNumber(result)
  }

  const sortAscNumber = ({ sourceNumber }: { sourceNumber: number[][] }) => {
    for (let i = 0; i < sourceNumber.length; i++) {
      for (let j = 0; j < i; j++) {
        const firstSourceNumber = sourceNumber[i][0] + sourceNumber[i][1]
        const secondSourceNumber = sourceNumber[j][0] + sourceNumber[j][1]
        if (firstSourceNumber < secondSourceNumber) {
          const temp = sourceNumber[i]
          sourceNumber[i] = sourceNumber[j]
          sourceNumber[j] = temp
        }
      }
    }
    // setArrayData(sourceNumber)
    return sourceNumber
  }

  const data = () => {
    //   // const res = await axios.get(
    //   //   'https://www.random.org/strings/?num=10&len=32&upperalpha=on&unique=off&format=plain',
    //   // )
    //   // // return res.data
    //   // // console.log(res.data)
    //   // setCharacter(res.data)
    const res = 'adhfjkadhfjkadfjkahfdkjhafjkd'
    // setCharacter(res.split(''))
    //   // console.log()
    //   const data = res.split('')
    const result: Record<string, number> = {}
    for (let i = 0; i < res.length; i++) {
      const char = res[i]
      result[char] = (result[char] || 0) + 1
    }
    setCharacter(result)
  }

  const flip = ({ sourceNumber }: { sourceNumber: number[][] }) => {
    for (let i = 0; i < sourceNumber.length; i++) {
      const temp = sourceNumber[i][0]
      sourceNumber[i][0] = sourceNumber[i][1]
      sourceNumber[i][1] = temp
    }

    return sourceNumber
  }

  const onClickAsc = () => {
    return setArrayData(sortAscNumber({ sourceNumber }))
  }

  const onClickDesc = () => {
    return setArrayData(sortAscNumber({ sourceNumber }).reverse())
  }

  const onFlip = () => {
    return setArrayData(flip({ sourceNumber: arrayData.map((row) => [...row]) }))
  }

  const onReset = () => {
    setArrayData(sourceNumber)
  }

  useEffect(() => {
    checkDoubleNumber({ sourceNumber })
    setArrayData(sourceNumber)
    data()
  }, [])

  return (
    <>
      <div className="flex flex-col m-10 gap-3">
        <div className="bg-slate-200 p-10 border-2 rounded">
          <h1 className="font-semibold">Source Number</h1>
          <p>{JSON.stringify(sourceNumber)}</p>
        </div>
        <div className="bg-slate-200 p-10 border-2 rounded">
          <h1 className="font-semibold">Double</h1>
          {doubleNumber}
        </div>
        <div className="flex">
          {arrayData.map((data, i) => {
            return (
              <div key={i} className="border-2 py-10 px-5 mx-3 text-center">
                <div>{data[0]}</div>
                <div className="border-t-2"></div>
                <div>{data[1]}</div>
              </div>
            )
          })}
        </div>
        <div>
          <button
            onClick={() => onClickAsc()}
            className="cursor-pointer px-8 py-1 bg-slate-800 hover:bg-slate-900 active:bg-slate-900 active:scale-95 text-white rounded mx-2"
          >
            Sort(ASC)
          </button>
          <button
            onClick={() => onClickDesc()}
            className="cursor-pointer px-8 py-1 bg-slate-800 hover:bg-slate-900 active:bg-slate-900 active:scale-95 text-white rounded mx-2"
          >
            Sort(DESC)
          </button>
          <button
            onClick={() => onFlip()}
            className="cursor-pointer px-8 py-1 bg-slate-800 hover:bg-slate-900 active:bg-slate-900 active:scale-95 text-white rounded mx-2"
          >
            Flip
          </button>
          <button
            onClick={() => {
              onReset()
            }}
            className="cursor-pointer px-8 py-1 bg-slate-800 hover:bg-slate-900 active:bg-slate-900 active:scale-95 text-white rounded mx-2"
          >
            Reset
          </button>
        </div>
        <div>
          <h1>Jumlah Kemunculan</h1>
          {Object.entries(character).map(([char, count]) => (
            <div key={char}>
              {char} : {count}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
