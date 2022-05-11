export { };

interface Profile {
  underTwenty: boolean;
  [name: string]: string | number | boolean;
}

let profile: Profile = { name: 'Ham', underTwenty: false };

// How to wrigt index signatres
// { [ index: typeForIndex ]: typeForValue }
profile.name = 'Ham';
profile.age = 43;
profile.nationaliry = 'Japan';