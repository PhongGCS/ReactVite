import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import useDataSource from './utils/useDataSource';
import { ContextType, SelectType, User } from './utils/type';
import NameInput from './components/NameInput';
import LocationInput from './components/LocationInput';
import ResultBox from './components/ResultBox';

const defaultValues = {
    name: "Nguyen Văn A",
    location: "Lạng sơn"
}
export const FormContext = createContext<ContextType>({
    dataSource: {
        message: 'Form V1',
        users: [],
    },
    selected: defaultValues,
    actions: {
        onChangeName: () => {},
        onChangeLocation: () => {},
        onSubmit: () => {},
    }
})
function FormV1() {
  const users: User[] = useDataSource();
  const [selectedValue, setSelectedValue] = useState<SelectType>(defaultValues);

  const handleOnChangeName = useCallback( (name: string) => {
    console.log("Fullname: ", name);
    setSelectedValue(preState => ({
        ...preState,
        name: name
    }));
  },[]);

  const handleOnChangeLocation = useCallback( (location: string) => {
    console.log("Location select: ", location);
    setSelectedValue(preState => ({
        ...preState,
        location: location
    }));
  },[]);


  const handleOnSubmit = useCallback( () => {
    console.log("On submit ...", selectedValue);
  }, [selectedValue]);


  const valueForm = useMemo<ContextType>( () => ({
    dataSource: {
        message: 'Form V1',
        users: users,
    },
    selected: selectedValue,
    actions: {
        onChangeName: handleOnChangeName,
        onChangeLocation: handleOnChangeLocation,
        onSubmit: handleOnSubmit,
    }
  }), [users, selectedValue])



  useEffect(() => {
    console.log("Handle value", selectedValue);
  }, [selectedValue])

  return (
    <>
      <div className='container mx-auto'>
        <FormContext.Provider value={valueForm}>
            <NameInput></NameInput>
            <LocationInput></LocationInput>
            <ResultBox />

        </FormContext.Provider>
      </div>
    </>

  )
}

export default FormV1;