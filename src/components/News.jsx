import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';


const { Title, Text } = Typography;
// const { Option } = Select;

const News = ({ simplified }) => {
  const { data: cryptoNews } = useGetCryptoNewsQuery();
  console.log(cryptoNews);

  const cryptoData = cryptoNews?.data;

  console.log(cryptoData);

  const slicedData = cryptoData?.slice(0, 10);

  console.log('Filtered:', slicedData);

  return (
    <>
      {simplified ? (
        <Row gutter={[24, 24]}>
          {slicedData?.map ((item, i) => (
            <Col xs={24} sm={12} lg={8} key={i}>
              <Card hoverable className='news-card'>
                <a href={item.url} target='_blank' rel='noreferrer'>
                  <div className="news-image-container">
                    <Title className='news-title' level={5}>
                      {item?.title}
                    </Title>
                    <img src={item?.thumbnail} alt="" style={{ maxWidth: '100px', maxHeight: '120px', objectFit: 'cover' }} />
                  </div>
                  <p>
                    {
                      item?.description > 100 ? `${item?.description.substring(0, 100)}...` : item?.description
                    }
                  </p>
                  <div className="provider-container">
                    <Text style={{color: 'grey'}}>
                      {moment(item.createdAt).startOf('ss').fromNow()}
                    </Text>
                  </div>
                </a>
              </Card>
            </Col>
          ))}
        </Row>
      ) :
      ( <>
          <Title level={2} className='home-title'>
              Latest Crypto News
          </Title>
          <Row gutter={[24, 24]}>
            {cryptoData?.map ((item, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                  <a href={item.url} target='_blank' rel='noreferrer'>
                    <div className="news-image-container">
                      <Title className='news-title' level={5}>
                        {item?.title}
                      </Title>
                      <img src={item?.thumbnail} alt="" style={{ maxWidth: '100px', maxHeight: '120px', objectFit: 'cover' }} />
                    </div>
                    <p>
                      {
                        item?.description > 100 ? `${item?.description.substring(0, 100)}...` : item?.description
                      }
                    </p>
                    <div className="provider-container">
                      <Text style={{color: 'grey'}}>
                        {moment(item.createdAt).startOf('ss').fromNow()}
                      </Text>
                    </div>
                  </a>
                </Card>
              </Col>
            ))}
          </Row>
        </>
      )}
    </>
  )
}

export default News
