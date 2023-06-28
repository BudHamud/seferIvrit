import { useContext, useEffect, useState } from "react";
import learnAPI from "../api/learnAPI";
import { AuthContext } from "../context/AuthContext";

const GetUnit = () => {
  const { user } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [unit, setUnit] = useState(true);

  useEffect(() => {
    const fetchUnit = async () => {
      try {
        const level = user.progress.level;
        const unit = user.progress.unit;
        const levelArr = await learnAPI.getLevels(level, unit);
        setUnit(levelArr);
        setLoading(false)
      } catch (error) {
        console.error(error);
      }
    };

    if (user.length !== 0) {
        fetchUnit();
    }
  }, []);

  return [loading, unit[0]];
};

export default GetUnit;
