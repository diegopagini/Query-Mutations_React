/** @format */
import { Button, Image, Input, Textarea } from '@nextui-org/react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

interface FormInputs {
	category: string;
	description: string;
	image: string;
	price: number;
	title: string;
}

export const NewProduct = () => {
	const { control, handleSubmit, watch } = useForm<FormInputs>({
		defaultValues: {
			category: 'electronics',
			description:
				'Quis laboris aute commodo tempor excepteur voluptate incididunt non elit anim eiusmod Lorem. Tempor adipisicing laborum eiusmod laborum amet velit veniam fugiat mollit. Consequat fugiat eu do irure nulla laboris exercitation incididunt do officia magna sunt elit. Reprehenderit dolore in duis duis ea fugiat culpa dolor duis. Duis non cillum irure amet. Do duis et deserunt labore deserunt consectetur culpa fugiat. Laborum eu occaecat consequat quis pariatur laborum commodo.',
			image:
				'https://thumb.pccomponentes.com/w-530-530/articles/1074/10747359/1596-seelseries-apex-pro-tkl-2023-teclado-mecanico-gaming-rgb-switch-omnipoint-20-layout-us.jpg',
			price: 10,
			title: 'Teclado',
		},
	});

	const newImage = watch('image');

	// useEffect(() => {
	// 	setTempImage(newImage);
	// }, [newImage]);

	const onSubmit: SubmitHandler<FormInputs> = (data: FormInputs) => {
		console.log(data);
	};

	return (
		<div className='w-full flex-col'>
			<h1 className='text-2xl font-bold'>Nuevo producto</h1>

			<form
				className='w-full'
				onSubmit={handleSubmit(onSubmit)}
			>
				<div className='flex justify-around items-center'>
					<div className='flex-col w-[500px]'>
						<Controller
							control={control}
							name='title'
							rules={{ required: true }}
							render={({ field }) => (
								<Input
									className='mt-2'
									type='text'
									label='Titulo del producto'
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>

						<Controller
							control={control}
							name='price'
							rules={{ required: true }}
							render={({ field }) => (
								<Input
									className='mt-2'
									type='number'
									label='Precio del producto'
									value={field.value?.toString()}
									onChange={(ev) => field.onChange(+ev.target.value)}
								/>
							)}
						/>

						<Controller
							control={control}
							name='image'
							rules={{ required: true }}
							render={({ field }) => (
								<Input
									className='mt-2'
									type='url'
									label='Url del producto'
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>

						<Controller
							control={control}
							name='description'
							rules={{ required: true }}
							render={({ field }) => (
								<Textarea
									className='mt-2'
									label='Descripcion del producto'
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>

						<Controller
							control={control}
							name='category'
							rules={{ required: true }}
							render={({ field }) => (
								<select
									className='rounded-md p-3 mt-2 bg-gray-800 w-full'
									value={field.value}
									onChange={field.onChange}
								>
									<option value="men's clothing">Men's clothing</option>
									<option value="women's clothing">Women's clothing</option>
									<option value='jewelery'>Jewelery</option>
									<option value='electronics'>Electronics</option>
								</select>
							)}
						/>

						<br />
						<Button
							className='mt-2'
							color='primary'
							type='submit'
						>
							Crear
						</Button>
					</div>

					<div
						className='bg-white rounded-2xl p-10 flex items-center'
						style={{
							width: '500px',
							height: '600px',
						}}
					>
						<Image src={newImage} />
					</div>
				</div>
			</form>
		</div>
	);
};
