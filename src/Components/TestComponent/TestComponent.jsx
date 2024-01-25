import test from '../../images/test.png'
export const TestComponent = ({ title }) => (
    <div className={`p-4 lg:py-10 bg-red-600`}>
            <img src={test} alt='test'/>
    </div>
);
