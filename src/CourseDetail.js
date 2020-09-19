import React, { useLayoutEffect, useState } from 'react';
import {Container, Content, Text, Button} from 'native-base';
import axios from 'axios';
import Footer from './Footer';

export default function CourseDetail({navigation, route}) {
  const [score, setScore] = useState([]);

  const dateFormat = date => {
    let res = new Date(Number(date) * 1000)
    var yyyy = res.getFullYear().toString();
    var MM = pad(res.getMonth() + 1,2);
    var dd = pad(res.getDate(), 2);
    var hh = pad(res.getHours(), 2);
    var mm = pad(res.getMinutes(), 2)

    return `${yyyy}.${MM}.${dd} ${hh}:${mm}`;
  }

  const pad = (number, length) => {
    let str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
  }

  useLayoutEffect(() => {
    axios.get(`http://localhost:5000/score/${route.params}`)
    .then(({data}) => {
      setScore(data);
    })
    .catch(err => console.log(err));
  }, [])

  return (
    <Container>
        <Content>
            <Button onPress={() => navigation.navigate('CourseNFC')}>
                <Text>태깅하기</Text>
            </Button>
            {score[0] &&
              <>
                <Text>선택코스 : {score[0]}</Text>
                <Text>시작시간 : {dateFormat(score[1])}</Text>

                {score[2] != 0 &&
                  <>
                    <Text>종료지점 : {score[2]}</Text>
                    <Text>종료시간 : {dateFormat(score[3])}</Text>
                  </>
                }
              </>
            }
        </Content>
        
        <Footer navigation={navigation} />
    </Container>
  );
};