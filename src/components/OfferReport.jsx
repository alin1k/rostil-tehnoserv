import React from 'react';
import { Document, Page, View, Text, StyleSheet, Image } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 40,
  },
  table: {
    display: 'table',
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    fontSize: 10,
  },
  tableRow: {
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableColNrCrt:{
    width: '5%',
    borderStyle: 'solid',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  info:{
    fontSize: 10,
  },
  heading: {
    paddingBottom: 15,
    paddingTop: 15,
    textAlign: "center",
    fontSize: 15,
  },
  total: {
    textAlign: "right"
  },
  footer:{
    fontSize: 10,
  },
  logo: {
    width: 200,
    marginLeft: -10
  },
  pozaProdus: {
    width: 75
  }
});

// Table component
const Table = ({produse}) => (
  <View style={styles.table}>
    {/* Table Header */}
    <View style={styles.tableRow}>
      <View style={styles.tableColNrCrt}>
        <Text style={styles.tableCell}>Nr. Crt.</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Poza produs</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Denumire produs</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Descriere</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Buc.</Text>
      </View>
      <View style={styles.tableCol}>
        <Text style={styles.tableCell}>Pret</Text>
      </View>
    </View>

    {/* Table Rows */}
    {produse.map((produs, index) => (
      <View style={styles.tableRow} key={produs.code}>
        <View style={styles.tableColNrCrt}>
          <Text style={styles.tableCell}>{index+1}</Text>
        </View>
        <View style={styles.tableCol}>
          <Image src={produs.img_src} style={styles.pozaProdus}/>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{produs.name}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{produs.description}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{produs.buc}</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>{produs.price.toFixed(2)} RON</Text>
        </View>
      </View>
    ))}
  </View>
);

const OfferReport = ({oferta}) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Image style={styles.logo} src="/images/RostilLogoBun.png"/>
      <Text style={styles.title}>Rostil Tehnoserv </Text>
      <Text style={styles.info}>RO22179536</Text>
      <Text style={styles.info}>J/29/1893/2007</Text>
      <Text style={styles.heading}>Oferta estimativa nr {oferta.id} din {oferta.data_modificare} Beneficiar: {oferta.numeClient}</Text>
      
      <Table produse={oferta.produse}/>
    
      <Text style={styles.total}>Total: {oferta.total.toFixed(2)} RON</Text>
      <Text style={styles.footer}>Intocmit de catre: Matei Nicolae</Text>
      <Text style={styles.footer}>Tel: 0723.493.065</Text>
      <Text style={styles.footer}>www.chillere.ro</Text>
    </Page>
  </Document>
);

export default OfferReport;