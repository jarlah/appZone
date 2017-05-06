import React from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';


const ListConferences = (props) => (
  <View>
<<<<<<< Updated upstream
=======
    <Text>Konferanseliste</Text>
    {props.nabolaget.future}
>>>>>>> Stashed changes
    {props.conferences.map((c) => (
      <Text key={c.slug}>
        {c.name}
      </Text>
    ))}
  </View>
);

export default connect(
  (state) => (
    {conferences: state.conferences.all
    })
)(ListConferences)
