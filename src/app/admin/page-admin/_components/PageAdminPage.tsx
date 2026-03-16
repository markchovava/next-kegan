"use client"

import SpacerDefault from "@/_components/spacers/SpacerDefault"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import HeadingDefault from "../../_components/headings/HeadingDefault"
import CardAdmin from "../../_components/cards/CardAdmin"
import { PageAdminNavData } from "../_data/sample/PageAdminNavData"




export default function PageAdminPage() {
  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Settings" />
    <SpacerPrimary />

    <section className="container__primary grid lg:grid-cols-4 grid-cols-2 gap-4">
        { PageAdminNavData.map((i, key) => (
            <CardAdmin key={key} data={i} />
        )) }
    </section>

    <SpacerDefault />
    </>
  )
}
