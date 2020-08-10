import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled from "styled-components";
import { ResponsiveRow } from "../layout";
import { community, resources, sitemap, top_adopters } from "./data";

const Title = styled.div`
  color: ${props => props.theme.colors.textSecondary};
  font-weight: 600;
  font-size: ${props => props.theme.fontSize.paragraph};
  margin-bottom: 1.5rem;
`;

const ListBox = styled.ul`
  margin: 0;
  padding: 0;
`;

const List = styled.li`
  text-decoration: none;
  display: flex;
  margin-top: 1rem;
  img {
    margin-right: 1rem;
  }
`;

const Row = styled.div`
  display: flex;
  justify-content: space-around;
  > * {
    margin: 0 1rem;
  }
`;

interface Link {
  name: string;
  image?: string;
  url: string;
}
interface Data {
  title: string;
  links: Link[];
}
interface LinkProps {
  data: Data;
  showImage: boolean;
  internalLink: boolean;
}
const Links: React.FC<LinkProps> = ({ data, showImage, internalLink }) => {
  return (
    <div>
      <Title>{data.title}</Title>
      <ListBox>
        {data.links.map(link =>
          internalLink ? (
            <GatsbyLink to={link.url}>
              <List>
                {showImage && <img src={link.image} alt={link.name} />}
                <div>{link.name}</div>
              </List>
            </GatsbyLink>
          ) : (
            <a href={link.url} target="_">
              <List>
                {showImage && <img src={link.image} alt={link.name} />}
                <div>{link.name}</div>
              </List>
            </a>
          )
        )}
      </ListBox>
    </div>
  );
};

const LinkGroup: React.FC = () => (
  <ResponsiveRow>
    <Row>
      <Links data={sitemap} showImage={false} internalLink={true} />
      <Links data={resources} showImage={true} internalLink={false} />
    </Row>
    <Row>
      <Links data={top_adopters} showImage={false} internalLink={false} />
      <Links data={community} showImage={true} internalLink={false} />
    </Row>
  </ResponsiveRow>
);

export { LinkGroup };
