"use client"

import SpacerDefault from "@/_components/spacers/SpacerDefault"
import SpacerPrimary from "@/_components/spacers/SpacerPrimary"
import HeadingDefault from "../../_components/headings/HeadingDefault"
import CardAdmin from "../../_components/cards/CardAdmin"
import { ProductAdminNavData } from "../_data/sample/ProductAdminNavData"




export default function ProductAdminPage() {
  return (
    <>
    <SpacerDefault />
    <HeadingDefault title="Products Info" />
    <SpacerPrimary />

    <section className="container__primary grid lg:grid-cols-4 grid-cols-2 gap-4">
        { ProductAdminNavData.map((i, key) => (
            <CardAdmin key={key} data={i} />
        )) }
    </section>

    <SpacerDefault />
    </>
  )
}
