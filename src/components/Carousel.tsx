import React from "react";
import { css } from "@emotion/react";
import styled from "@emotion/styled"; // 或者从 '@emotion/styled' 导入
import gameVideo1 from "../assets/gameVideo1.mp4";
import gameVideo2 from "../assets/gameVideo2.mp4";
import gameVideo3 from "../assets/gameVideo3.mp4";
import { Box } from "@chakra-ui/react";

const videoURLs = [gameVideo1, gameVideo2, gameVideo3];

const containerStyles = css`
  display: flex;
  justify-content: space-between;
  margin: 180px 200px;
  gap: 50px;
`;

const VideoContainer = styled.div`
  width: calc(33.33% - 20px);
  transition: height 0.5s ease;
  overflow: hidden;
  height: 250px;
  border-radius: 20px;

  &:hover {
    height: 400px;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Carousel: React.FC = () => {
  return (
    <Box css={containerStyles}>
      {videoURLs.map((videoURL, index) => (
        <VideoContainer key={index}>
          <VideoWrapper>
            <video
              width="100%"
              height="100%"
              style={{ objectFit: "cover" }}
              src={videoURL}
              onMouseEnter={(e) => e.currentTarget.play()}
              onMouseLeave={(e) => e.currentTarget.pause()}
              loop
              muted
            />
          </VideoWrapper>
        </VideoContainer>
      ))}
    </Box>
  );
};

export default Carousel;
