"use client"

import SpacerDefault from "@/_components/spacers/SpacerDefault"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import HeadingDefault from "../../_components/headings/HeadingDefault"
import CardAdmin from "../../_components/cards/CardAdmin"
import { MediaNavData } from "../_data/sample/MediaNavData"




export default function MediaPage() {
  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Media" />
    <SpacerPrimary />

    <section className="container__primary grid lg:grid-cols-4 grid-cols-2 gap-4">
        { MediaNavData.map((i, key) => (
            <CardAdmin key={key} data={i} />
        )) }
    </section>

    <SpacerDefault />
    </>
  )
}
