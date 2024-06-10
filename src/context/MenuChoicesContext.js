import React, { createContext, useEffect, useState } from "react";

const MenuChoicesContext = createContext()

function MenuChoicesProvider(props) {

  const menuChoicesDefault = [
    {
      img: "https://edamam-product-images.s3.amazonaws.com/web-img/a54/a54596475a24e35b0ace165b20a66729.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIQCLwEYoXe%2FIGyTnZAeKDi8xfXbnTCNruxZIY%2BUQRjDphQIgXtwK8yYMoEAI265hk8Kx1MughAbE9XFNW9JMAR%2Bp4SUquAUIQRAAGgwxODcwMTcxNTA5ODYiDP4HCx66X50bYkuGiiqVBeSy7oH%2BDm4V4tNKIc0h9c5lfOOa9zLXMVeV6xoFUpfbVQIUhaZS6Jre6VMdbNWsWcPHtwyxhVdVbTKmC9ffE0gPlO%2Bigcvb9RAKUKmenTYomW5WZjsqiASP7ml7gPfA1M6eoTjFfT%2BgmCZY2t4EjEMVZFjScS%2FGRxDNwz4cDzvI48UTMm%2FNuWTt5opIMFDPGh%2FCtGvY0CVkFZvVXq1i6djjqMHZ0YvlCe8zq%2B9axV4LerZiP0NnJ4fYGoeQeBKuZWHRI06BU7YgbzAbrSa%2BxcJwcY%2FlHkHJ5LkKZnW54dEyXiXR%2Bicp1s7HKWcXY8QBP1J%2BGPnwiXFgZ3cK8Ql0AfFwz8%2Bl3YjAjPjWvSdOlaEEdVLxPBXf7WezZeIf%2BkaTsF7918ylDxwGwpm1zbUIywSE1WoeR5t01wJxFEi2jZIZtCijsv%2FE%2FmOdse2j81ggZvVMNLtadpMOyWoeTu48igfBYiflX2dr3SIM0y8YVPAltFJJl3cbEyNGnWOpvIfQZkYvqu6hOMNGncDEUrV9dyrxi3b%2FcFe6ECnrMgZVAEzJ%2BWXFz87HLSo16apWILffcUMF%2FfzjeFuF9lb5v8EAko3OTqbihLYYeA48%2BdMhnZiZw959y4TTc7YguUN%2F82SB9qcCmEBWYtnZN9zJPNczP%2FP%2BsBiR1BHuzR06LAKeZosN6Zh9DbsvO%2BKSsh6ylizc5DpbY9J74mxvMg9%2FS4dBYmVnOYE9Urtvk7%2FeMQKpNED3%2BC9T%2BpJxli8icrcSU%2FNBDaOPvhBdcf3M%2FuDgk0mt8TvmKHmXp2mk8foOQIdki0DzQiLY6gnNuTrWqfHDEV2aEpE3X3JkN3W6SYv9%2BAtSSJ1X%2BvmjU8wHz87jU%2FgX0tRCp9rk2vow8eqaswY6sQGI4Fh2%2FEHNiZppxz9z2ESWQK%2Bhm3c3OE8BXxfTH8IaESd2H3wkPawGuRxGqqc3KxVHntcjqi6TLZ4isMgQvCYmeow7dEYp0EVJzn%2B4P1Pn6wneaxZpvp3%2FMoB97Y1wa2WW%2FKVdY2CuJSWWu0TBE%2BdUL9gS50JCrHffFjnZUD0HTV7UdRX%2F5A9a9XFH7useKfl2JyiGq8VwKy3Ehr9z5KeUuEC5jaGopoevk6box3in170%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20240610T085557Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFMZGYGGVO%2F20240610%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=cf6d7d890d77a5a66caff00e0e05f669463610000204677df0484ba697f07a5a"
    },
    {
      img: "../../assets/img/emptyMenuSlot.png"
    }
  ]


  /*   const [menuChoices, setMenuChoices] = useState(menuChoicesDefault) */
  const [menuChoices, setMenuChoices] = useState()

  useEffect(() => {
    if (localStorage.getItem("MenuMate_MenuChoices") === null) {
      setMenuChoices(menuChoicesDefault)
      localStorage.setItem("MenuMate_MenuChoices", JSON.stringify(menuChoicesDefault))
    }
    else {
      setMenuChoices(JSON.parse(localStorage.getItem("MenuMate_MenuChoices")))
    }
  }, [])

  return (
    <MenuChoicesContext.Provider value={{ menuChoices, setMenuChoices }}>
      {props.children}
    </MenuChoicesContext.Provider>

  )
}

export { MenuChoicesContext, MenuChoicesProvider }