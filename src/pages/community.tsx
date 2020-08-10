import React from 'react'
import { Layout, ResponsiveRow } from '../components/layout'
import { SEO } from '../components/seo'
import styled from 'styled-components'
import { Button } from '../components/button'
import { BoundedContainer } from '../components/layout'
import { useTheme, theme } from '../styles'

const HeaderText = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 3rem;
  width: ${(props) => (props.theme.screens.sm ? '100%' : '35%')};
`

const CommunityImage = styled.img`
  width: 50%;
  margin: -5% 0;
`

const Header: React.FC = () => {
  const { sm } = useTheme().screens

  const headerText = (
    <>
      By the community,
      <br />
      for the community!
    </>
  )

  return (
    <div style={{ height: '100%' }}>
      <ResponsiveRow>
        {sm ? (
          <></>
        ) : (
          <CommunityImage src="./svg/CommunityBackground.svg" alt="Community" />
        )}
        <HeaderText style={{ marginTop: '5%' }}>
          {sm ? <h3>{headerText}</h3> : <h1>{headerText}</h1>}
          <p
            style={{
              fontSize: '0.9rem',
              margin: '2rem 0',
              color: theme().colors.darkGrey,
            }}
          >
            Created by our users, contributors, and adopters, the Litmus
            community truly believes in adding to the value of open source
            culture where serving the community is of utmost priority to us, and
            imparting the value of cloud-native chaos is all that matters.
            <br />
            <br />
            We welcome Kubernetes SREs and Developers to join this zealous
            community to learn and share all about cloud-native Chaos
            Engineering and help Kubernetes infrastructures be resilient. Let’s
            make this journey wonderful together.
          </p>
          <Button screen={sm ? 'small' : 'large'} gradientColor="purple">
            Get Started
          </Button>
        </HeaderText>
      </ResponsiveRow>
    </div>
  )
}

const Community = () => {
  return (
    <Layout>
      <SEO />
      <BoundedContainer width="75%" margin="5rem auto">
        <Header />
      </BoundedContainer>
    </Layout>
  )
}

export default Community
