import React from 'react'
import EditOferta from '@/components/EditOferta';

export default async function OfertaPage({params}) {

  const id = (await params).id;

  return (
    <EditOferta id={id}/>
  )
}
