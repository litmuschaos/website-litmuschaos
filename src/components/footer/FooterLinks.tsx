import { Link as GatsbyLink } from "gatsby";
import React from "react";
import styled from "styled-components";

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
  list-style: none;
  a {
    display: flex;
    margin-top: 1rem;
    img {
      margin-right: 1rem;
    }
  }
`;

const LinkColumn = styled.div`
  margin: 1rem;
  &:nth-child(3) {
    width: 50%;

    & li {
      float: left;
      min-width: 5rem;
      margin-right: 1rem;
      & a {
        margin-top: 0;
        margin-bottom: 1rem;
        & img {
          margin-right: 0.5rem;
        }
      }
    }
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
    <LinkColumn>
      <Title>{data.title}</Title>
      <ListBox>
        {data.links.map(link =>
          internalLink ? (
            <List key={link.name}>
              <GatsbyLink to={link.url}>
                {showImage && (
                  <img src={link.image} alt={`${link.name} icon`} />
                )}
                <div>{link.name}</div>
              </GatsbyLink>
            </List>
          ) : (
            <List key={link.name}>
              <a rel="noopener noreferrer" href={link.url} target="_blank">
                {showImage && (
                  <img src={link.image} alt={`${link.name} icon`} />
                )}
                <div>{link.name}</div>
              </a>
            </List>
          )
        )}
      </ListBox>
    </LinkColumn>
  );
};

export { Links };
