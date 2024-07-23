// UserComponents.js
import React from 'react';
import { useParams } from 'react-router-dom';
import LayoutInit from '../components/LayoutInit';
import Home from '../pages/home/Home';
import Reserve from '../pages/reserve/Reserve';
import Menu from '../pages/menu/Menu';
import Facility from '../pages/facility/Facility';
import Profile from '../pages/profile/Profile';

export function HomeWithUserId() {
  const { id } = useParams();
  return (
    <LayoutInit>
      <Home userId={id} />
    </LayoutInit>
  );
}

export function ReserveWithUserId() {
  const { id } = useParams();
  return (
    <LayoutInit>
      <Reserve userId={id} />
    </LayoutInit>
  );
}

export function MenuWithUserId() {
  const { id } = useParams();
  return (
    <LayoutInit>
      <Menu userId={id} />
    </LayoutInit>
  );
}

export function FacilityWithUserId() {
  const { id } = useParams();
  return (
    <LayoutInit>
      <Facility userId={id} />
    </LayoutInit>
  );
}

export function ProfileWithUserId() {
  const { id } = useParams();
  return (
    <LayoutInit>
      <Profile userId={id} />
    </LayoutInit>
  );
}

export default {
  HomeWithUserId,
  ReserveWithUserId,
  MenuWithUserId,
  FacilityWithUserId,
  ProfileWithUserId,
};
