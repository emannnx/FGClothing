import React from 'react';
import Navbar from './Navbar';
import { cloth_data } from '@/utils/userInfo';
import { useParams } from 'react-router-dom';

const ImageOpen = () => {
  const { id } = useParams<{ id: string }>();
  const filter_data = cloth_data.filter(item => item.id === Number(id));

  return (
    <div>
      <Navbar />
      <div
        style={{
          width: "100%",
          height: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          // background: "red"
        }}
      >
        <div
          style={{
            width: "70%",
            height: "70%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {filter_data.map((props) => (
            <div key={props.id} style={{ width: "100%",height: "100%", textAlign: "center" }}>
              {props.video ? (
                <video
                  src={props.video}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <img
                  src={props.image}
                  alt={props.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              )}
              <h1 style={{ fontSize: 30, fontWeight: "600" }}>{props.title}</h1>
              <p style={{ fontWeight: "400" }}>{props.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageOpen;
