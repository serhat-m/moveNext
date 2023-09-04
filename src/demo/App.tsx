import { useEffect, useState, useCallback } from "react"
import { useThemeState } from "./hooks/useTheme"

// Functions
import moveNext, { Direction } from "../package/functions/moveNext"
import arrowKeyHandler from "./functions/arrowKeyHandler"
import switchClickHandler from "./functions/switchClickHandler"
import getActiveKey from "./functions/getActiveKey"

// Components
import Header from "./components/Header"
import ListItem from "./components/ListItem"
import Snippet from "./components/Snippet"
import Button from "./components/Button"
import KeyButton from "./components/KeyButton"

// CSS imports
import { DemoCSS, BoxCSS, ListCSS, IntroCSS, ButtonSwitchCSS, ColorsCSS, margin } from "./styles"

// SVG
import { SvgChevronUp, SvgChevronDown } from "./assets/svgs"

const App = () => {
  const themeState = useThemeState()
  const [behaviour, setBehaviour] = useState<{ default: boolean; jump: boolean }>({ default: true, jump: false })
  const [selectorIdentifier, setSelectorIdentifier] = useState<{ id: boolean; title: boolean }>({ id: true, title: false })
  const activeIdentifier = getActiveKey(selectorIdentifier) ?? "id"

  // Content state
  type Content = { id: number; title: string }
  const [content, _setContent] = useState<Content[]>([
    { id: 1, title: "Dataset 1" },
    { id: 2, title: "Dataset 2" },
    { id: 3, title: "Dataset 3" },
    { id: 4, title: "Dataset 4" },
    { id: 5, title: "Dataset 5" },
  ])
  const [selectedId, setSelectedId] = useState<Content[keyof Content] | undefined>(undefined)

  const dataUpdater = useCallback(
    (direction: Direction) => {
      setSelectedId((prevSelected) => {
        return moveNext({
          data: content,
          direction,
          endBehaviour: getActiveKey(behaviour) ?? "default",
          selector: (entry) => entry[activeIdentifier],
          selectedId: prevSelected,
        })
      })
    },
    [behaviour, content, activeIdentifier],
  )

  const keyDownHandler = useCallback(
    (e: KeyboardEvent) => {
      arrowKeyHandler(e, (direction) => {
        e.preventDefault()
        dataUpdater(direction)
      })
    },
    [dataUpdater],
  )

  // Reset selectedId if identifier changes
  useEffect(() => {
    setSelectedId((prevState) => {
      if (prevState !== undefined) {
        return undefined
      }
    })
  }, [selectorIdentifier])

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler)

    return () => {
      document.removeEventListener("keydown", keyDownHandler)
    }
  }, [keyDownHandler])

  useEffect(() => {
    const body = document.querySelector("body")

    if (body) {
      if (themeState.get === "dark") {
        body.classList.remove(ColorsCSS.light)
        body.classList.add(ColorsCSS.dark)
      } else {
        body.classList.remove(ColorsCSS.dark)
        body.classList.add(ColorsCSS.light)
      }
    }
  }, [themeState.get])

  return (
    <>
      <Header />
      <main className="container">
        <p className={`${IntroCSS.description}`}>Simple and straightforward solution to get the next logical record</p>
        <section className={`${BoxCSS.box} ${IntroCSS.settings}`}>
          <div className={`${IntroCSS.group}`}>
            <span>Click</span>
            <div className={IntroCSS.controlButtons}>
              <KeyButton onClick={(_e) => dataUpdater("prev")}>
                <SvgChevronUp />
              </KeyButton>
              <KeyButton onClick={(_e) => dataUpdater("next")}>
                <SvgChevronDown />
              </KeyButton>
            </div>
            <span>or use up/down keys</span>
          </div>
          <div className={`${IntroCSS.group}`}>
            <span className={ButtonSwitchCSS.title}>endBehaviour:</span>
            <div className={ButtonSwitchCSS.container}>
              {Object.keys(behaviour).map((key, i) => {
                return (
                  <Button
                    key={i}
                    onClick={() => setBehaviour((prevState) => switchClickHandler(key, prevState))}
                    appearance={behaviour[key as keyof typeof behaviour] ? "primary" : "secondary"}
                  >
                    {key}
                  </Button>
                )
              })}
            </div>
          </div>
          <div className={`${IntroCSS.group}`}>
            <span className={ButtonSwitchCSS.title}>selector:</span>
            <div className={ButtonSwitchCSS.container}>
              {Object.keys(selectorIdentifier).map((key, i) => {
                return (
                  <Button
                    key={i}
                    onClick={() => setSelectorIdentifier((prevState) => switchClickHandler(key, prevState))}
                    appearance={selectorIdentifier[key as keyof typeof selectorIdentifier] ? "primary" : "secondary"}
                  >
                    {key}
                  </Button>
                )
              })}
            </div>
          </div>
        </section>
        <div className={`row g-4 g-sm-3`}>
          <div className={`col-12 col-sm-6 col-md-5`}>
            <h1>Data view</h1>
            <ul className={`${BoxCSS.box} ${ListCSS.list} ${margin({ bottom: "2" })}`}>
              <ListItem className={`${ListCSS.item}`}>
                <div>
                  <Snippet title="selectedId" active={true}>
                    {selectedId}
                  </Snippet>
                </div>
              </ListItem>
            </ul>
            <ul className={`${BoxCSS.box} ${ListCSS.list}`}>
              {content.map((entry) => {
                return (
                  <ListItem key={entry.id} className={`${ListCSS.item}`}>
                    {Object.keys(entry).map((key, i) => {
                      const value = entry[key as keyof typeof entry]
                      return (
                        <div key={i}>
                          <Snippet title={key} active={value === selectedId}>
                            {value}
                          </Snippet>
                        </div>
                      )
                    })}
                  </ListItem>
                )
              })}
            </ul>
          </div>
          <div className={`col-12 col-sm-6 col-md-7 ${DemoCSS.flex}`}>
            <h1>Demo</h1>
            <ul className={`${BoxCSS.box} ${ListCSS.list} ${DemoCSS.fullHeight}`} onMouseLeave={() => setSelectedId(undefined)}>
              {content.map((entry) => {
                return (
                  <ListItem
                    key={entry.id}
                    className={`${ListCSS.item}${entry[activeIdentifier] === selectedId ? ` ${ListCSS.itemSelected}` : ""}`}
                    onMouseOver={() => setSelectedId(entry[activeIdentifier])}
                  >
                    {entry.title}
                  </ListItem>
                )
              })}
            </ul>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
