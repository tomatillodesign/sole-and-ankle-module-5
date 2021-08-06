/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
       <Overlay>
          <ModalContent aria-label="modal content">
            <ModalCloseButton onClick={onDismiss}><Icon id="close" strokeWidth={1} /></ModalCloseButton>
            <ModalNav>
               <a href="/sale">Sale</a>
               <a href="/new">New&nbsp;Releases</a>
               <a href="/men">Men</a>
               <a href="/women">Women</a>
               <a href="/kids">Kids</a>
               <a href="/collections">Collections</a>
            </ModalNav>
            <ModalFooter>
               <a href="/terms">Terms and Conditions</a>
               <a href="/privacy">Privacy Policy</a>
               <a href="/contact">Contact Us</a>
            </ModalFooter>
            </ModalContent>
      </Overlay>
  );
};


const Overlay = styled(DialogOverlay)`
     position: fixed;
     top: 0;
     left: 0;
     right: 0;
     bottom: 0;
     background: rgba(0,0,0,.7);
     display: flex;
     justify-content: center;
     align-items: center;
     height: 100%;
`;

const ModalContent = styled(DialogContent)`
     position: relative;
     background: white;
     margin-left: auto;
     width: 80%;
     height: 100%;
     display: flex;
     flex-direction: column;
     justify-content: space-between;
     padding: 32px;
`;

const ModalNav = styled.nav`
     display: flex;
     flex-direction: column;

     a {
          text-decoration: none;
          text-transform: uppercase;
          color: ${COLORS.gray[900]};
          margin: 11px 0;
     }
`;

const ModalCloseButton = styled.button`
     display: flex;
     margin-left: auto;
     background: transparent;
     border: none;
`;

const ModalFooter = styled.footer`
     display: flex;
     flex-direction: column;
     flex-basis: 0;

     a {
          text-decoration: none;
          color: ${COLORS.gray[700]};
          font-size: 0.875rem;
          margin: 4px 0;
     }
`;


export default MobileMenu;
