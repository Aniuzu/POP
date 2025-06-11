import React, { useState, useRef, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import heroVideo from '../assets/hero-video.mp4';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );
    if (videoRef.current) observer.observe(videoRef.current);
    return () => observer.disconnect();
  }, []);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section
      className={`hero-section ${isVisible ? 'in-view' : ''}`}
      ref={videoRef}
    >
      <Container>
        <Row className="align-items-center">
          <Col lg={6} className="hero-content-col">
            <div>
              <h1 className="hero-title">
                BLOCKS & BUILDING MATERIALS SUPPLIER
              </h1>
              <p className="hero-subtitle">
                Supplying quality concrete blocks and raw materials for all your construction
              </p>
              <Button
                as={Link}
                to="/quote"
                variant="primary"
                size="lg"
                className="hero-cta-btn"
              >
                Request a Quote
              </Button>
            </div>
          </Col>
          <Col lg={6} className="hero-video-col">
            <video
              ref={videoRef}
              autoPlay
              loop
              muted={isMuted}
              playsInline
              preload="metadata"
              poster="/assets/hero-poster.jpg"
              className="hero-video"
            >
              <source src={heroVideo} type="video/mp4" />
              Your browser does not support the video tag.
            </video>

            <div className="sound-toggle" onClick={toggleMute}>
              <div className="sound-waves">
                <div className="sound-bar"></div>
                <div className="sound-bar"></div>
                <div className="sound-bar"></div>
                <div className="sound-bar"></div>
                <div className="sound-bar"></div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;